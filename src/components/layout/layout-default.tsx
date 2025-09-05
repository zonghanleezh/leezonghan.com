interface Props {
  children: React.ReactNode
}

const LayoutDefault = ({ children }: Props) => {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <main>{children}</main>
    </div>
  )
}

export default LayoutDefault
