export function HireMe() {
  return (
    <section className="mt-4 w-full">
      <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F3F5F6] px-3 py-1.5">
            <span className="text-sm">✦</span>
            <span className="text-sm font-medium text-[#5B5A5C]">
              Let&apos;s work together
            </span>
          </div>
          <h2 className="text-xl font-semibold text-[#141316]">
            Ready to build something great?
          </h2>
          <p className="mt-2 text-sm text-[#5B5A5C]">
            Share a few details and I&apos;ll get back to you with a thoughtful
            response.
          </p>
        </div>

        <form className="mt-5 space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-3 py-2.5 text-sm text-[#141316] outline-none transition focus:border-[#141316]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-3 py-2.5 text-sm text-[#141316] outline-none transition focus:border-[#141316]"
            />
          </div>

          <textarea
            placeholder="Tell me about your project"
            rows={4}
            className="h-24 w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-3 py-2.5 text-sm text-[#141316] outline-none transition focus:border-[#141316]"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#5B5A5C]">
              Typically replies within few minutes.
            </p>
            <button
              type="submit"
              className="rounded-full bg-[#141316] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2A2A2D]"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-[#141316]">Follow me</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#F3F5F6] px-3 py-1.5 text-sm text-[#5B5A5C]">
              GitHub
            </span>
            <span className="rounded-full bg-[#F3F5F6] px-3 py-1.5 text-sm text-[#5B5A5C]">
              LinkedIn
            </span>
            <span className="rounded-full bg-[#F3F5F6] px-3 py-1.5 text-sm text-[#5B5A5C]">
              X / Twitter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
