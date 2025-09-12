const Badge = ({ text }: { text: string }) => {
  return (
    <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">{text}</span>
  )
}

export default Badge
