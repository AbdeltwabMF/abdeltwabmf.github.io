import { H1 } from '@/components/Form'
export default function PageTitle ({ children, font }) {
  return (
    <H1 className={' ' + font}>
      {children}
    </H1>
  )
}
