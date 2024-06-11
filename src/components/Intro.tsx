import { BodyText, SubheaderText, Link } from 'components/Text'
import Story from 'components/Story'

export default function () {
  return (
    <article className="prose max-w-4xl md:max-w-7xl">
      <SubheaderText>Я использую более 8-ми языков!</SubheaderText>
      <BodyText>
        В мой арсенал входят такие языки как JavaScript и TypeScript, С и C++,
        Rust, Zig, Python, Java, Gleam, Lua.{'\n'}
        {/* <Link url="https://book.bdut.ch">the book's website</Link> or{' '}
        <Link url="https://a.co/d/8ALfLVd">on Amazon</Link>. Curious about how I
        got from zero to a published author? Check out{' '}
        <Link url="https://blog.borodutch.com/heres-how-i-published-my-book">
          my blog post
        </Link>{' '}
        where I describe the process! */}
      </BodyText>
      <Story />
      {/* <SubheaderText>Ways to contribute</SubheaderText>
      <BodyText>
        In case you want, you can always become a sponsor of my work on{' '}
        <Link url="https://github.com/sponsors/backmeupplz">
          my GitHub Sponsor profile
        </Link>{' '}
        or on{' '}
        <Link url="https://www.buymeacoffee.com/borodutch">
          my Buy Me a Coffee profile
        </Link>
        . I fund all of my projects personally, and the donations help me a lot
        to keep the products free and open. Thank you.
      </BodyText> */}
    </article>
  )
}
