import { Navbar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-[48] hidden h-full w-64 flex-col pt-[80px] md:flex">
        <Sidebar />
      </div>
      {children}
    </div>
  )
}
