export function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 text-center">
      <div className="container mx-auto px-4">
        <img
          src="https://siberian.pro/wp-content/uploads/2022/03/logo-2.svg"
          alt="siberian.pro"
          className="h-8 mx-auto mb-4 invert opacity-60"
        />
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} siberian.pro · AI-решения для бизнеса</p>
      </div>
    </footer>
  )
}
