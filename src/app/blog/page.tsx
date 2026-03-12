import Link from 'next/link'
import PageShell from '@/components/PageShell'
import posts from '@/data/blog-posts.json'

function formatDate(d: string) {
  const [y, m, day] = d.split('-')
  const months = ['', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
  return `${day} ${months[parseInt(m)]}, ${y}`
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <PageShell>
      {/* Hero */}
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Blog TalkPOS</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Kiến thức cho tiểu thương Việt
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl">
            Thuế, sổ sách, nhân sự, kinh doanh — mọi thứ bạn cần biết để vận hành hộ kinh doanh hiệu quả hơn.
          </p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[1100px] mx-auto">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-14">
          <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-8 md:p-10
                          hover:border-[#E8381A]/40 hover:-translate-y-1 transition-all duration-200
                          relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E8381A] to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[0.68rem] font-bold px-2.5 py-1 rounded-full border"
                style={{ color: featured.categoryColor, borderColor: `${featured.categoryColor}40`, background: `${featured.categoryColor}12` }}>
                {featured.category}
              </span>
              <span className="text-xs font-bold bg-[#E8381A]/10 text-[#E8381A] border border-[#E8381A]/25 px-2.5 py-1 rounded-full">
                ✦ Nổi bật
              </span>
            </div>
            <h2 className="font-display font-black text-[clamp(1.4rem,2.5vw,2rem)] tracking-tight leading-tight mb-3
                           group-hover:text-[#E8381A] transition-colors">
              {featured.title}
            </h2>
            <p className="text-[#888] font-light leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-[#555]">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>🕐 {featured.readTime}</span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6 h-full
                              hover:border-[#E8381A]/35 hover:-translate-y-1 transition-all duration-200
                              relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E8381A] to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full border inline-block mb-4 self-start"
                  style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40`, background: `${post.categoryColor}12` }}>
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-[1rem] leading-snug mb-3 flex-1
                               group-hover:text-[#E8381A] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[0.8rem] text-[#777] font-light leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-[0.68rem] text-[#555] mt-auto">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>🕐 {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
