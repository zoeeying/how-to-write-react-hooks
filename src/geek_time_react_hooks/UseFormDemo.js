import { useState, useCallback, useMemo } from 'react'

function useForm(initialValues = {}, validators) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const setFieldValue = useCallback(
    (name, value) => {
      setValues(values => ({
        ...values,
        [name]: value,
      }))

      // validators是针对某个字段的验证函数，验证函数存在才调用
      if (validators[name]) {
        const errMsg = validators[name](value) || ''
        setErrors(errors => ({
          ...errors,
          [name]: errMsg,
        }))
      }
    },
    [validators]
  )

  // 返回整个form的值、设置值的方法和错误信息
  return { values, errors, setFieldValue }
}

export default function UseFormDemo() {
  // 用useMemo缓存validators对象
  const validators = useMemo(() => {
    return {
      name: value => {
        // 要求name的长度不得小于2
        if (value.length < 2) {
          return 'Name length should be no less than 2.'
        }
        return ''
      },
      email: value => {
        // 简单的实现一个email验证逻辑：必须包含@符号
        if (!value.includes('@')) {
          return 'Invalid email address'
        }
        return ''
      },
    }
  }, [])

  const { values, errors, setFieldValue } = useForm({}, validators)

  // 处理表单的提交事件
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      console.log(values)
    },
    [values]
  )

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name: </label>
        <input value={values.name} onChange={e => setFieldValue('name', e.target.value)} />
        <span style={{ color: 'red' }}>{errors.name}</span>
      </div>
      <div>
        <label>Email: </label>
        <input value={values.email} onChange={e => setFieldValue('email', e.target.value)} />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
