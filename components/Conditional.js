export default function Conditional (props) {
  const { condition, children } = props

  return (
    <>
      {Boolean(condition) && children}
    </>
  )
}
