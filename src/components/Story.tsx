import { SubheaderText, BodyText, Link, TextButton } from 'components/Text'
import { useState } from 'preact/hooks'

export default function Story() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={'relative' + (!showMore ? ' bp-2' : '')}>
      <SubheaderText>Моя история</SubheaderText>
      <BodyText>
        Приветствую! Меня зовут Виктор, и я программист обучающийся в колледже.
      </BodyText>
      <BodyText>
        Я начал изучение программирования в школе с языка C++. За пол года я
        начал изучать скриптинг на языке Python и различные структуры данных.
        Спустя несколько лет я знал и умел создавать сайты с помощью современных
        фреймворков на языке TypeScript В свободное время я увлекаюсь изучением
        новых технологий, включая новые языки программирования.
      </BodyText>
      {showMore ? (
        <>
          <BodyText>
            Основные языки и технологии используемые мной включают в себя:
            <ul>
              <li>
                фронт-энд:{' '}
                <ul>
                  {[
                    'TypeScript',
                    'Preact',
                    'MongoDB',
                    'Jotai',
                    'Tailwind',
                    'DaisyUI',
                  ].map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>
              </li>
              <li>
                бэк-энд
                <ul>
                  {[
                    'TypeScript',
                    'Koa',
                    'Mongoose',
                    'Lodash',
                    'axios+amala',
                  ].map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>
              </li>
              <li>
                для системных и мультиплатформенных GUI приложения
                <ul>
                  {['Zig', 'C', 'C++', 'Rust', 'Raylib'].map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>
              </li>
            </ul>
            {/* I started as an iOS developer. Over the years, I've mastered backend,
        frontend, Android, React Native development, management, hiring,
        consulting, public speaking, and other soft skills. You can find my
        up-to-date tech stack in{' '}
        <Link url="https://templates.borodutch.com">
          the list of my code templates
        </Link> */}
            .
          </BodyText>
          <BodyText>
            Моя цель принести пользу людям вокруг меня. Если я вижу рутиную
            задачу, я пытаюсь решить её как можно скорее. Мои статичные
            приложения и фронт-энд распространены через сервис github-pages, а
            бэкенд расположен на сервере управляемым системой Linux с
            дистрибутивом Ubuntu. Что касается баз данных, я предпочитаю
            использовать MongoDB (и PostgresSQL когда база данных обязана быть
            реляционной)
            {/* My mission is to bring value to the people
            around me. If I see a pain point, I try to fix it as soon as
            possible. Aside from my main tech stack, programming languages I use
            include Python, Ruby, Objective-C, Java, C, C++, Assembly, Bash,
            Groovy, Dart, JavaScript, Solidity, Circom, and some R. I host all
            of my servers on dedicated instances in the cloud running various
            Linux distros (mainly Debian based). I build hardware solutions for
            fun based on Raspberry Pi's and connect much random stuff to its
            GPIO. I'm fluent in Vue, React, and Angular. I'm fond of AI, ML,
            web3, and social. As per databases, I favor MongoDB (and PostgreSQL
            when it just has to be relational) on the server and WatermelonDB
            locally — always trying to be a step ahead of the current tech. */}
          </BodyText>
          {/* <BodyText>
            Please, find my contacts, the list of the products I'm most proud of
            with some of their stats, and the list of publications on this page.
            Cheers!
          </BodyText> */}
        </>
      ) : (
        <>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-base-100 via-transparent" />
          <div className="absolute bottom-0 w-full flex flex-row items-end justify-center">
            <TextButton onClick={() => setShowMore(true)}>Показать</TextButton>
          </div>
        </>
      )}
    </div>
  )
}
