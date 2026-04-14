import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Политика конфиденциальности | НОКС",
  description: "Политика конфиденциальности веб-студии НОКС",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4 flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-muted-foreground mb-12">
            Последнее обновление: 14 апреля 2026 года
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей веб-сайта НОКС (далее — Сайт), расположенного по адресу noks.studio.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                В случае несогласия с условиями Политики пользователь должен прекратить использование Сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">2. Персональные данные пользователей</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Под персональными данными понимается любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы можем собирать следующие персональные данные:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Имя пользователя в мессенджерах (Telegram, WhatsApp)</li>
                <li>Информация о проекте, предоставленная пользователем</li>
                <li>IP-адрес, данные о браузере и устройстве</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">3. Цели обработки персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Персональные данные пользователей обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Обработка входящих запросов и заявок</li>
                <li>Связь с пользователем для обсуждения проектов</li>
                <li>Предоставление услуг по разработке веб-сайтов и приложений</li>
                <li>Направление информационных материалов (с согласия пользователя)</li>
                <li>Улучшение качества обслуживания и работы Сайта</li>
                <li>Проведение статистических исследований</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">4. Правовые основания обработки</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Обработка персональных данных осуществляется на следующих правовых основаниях:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Согласие субъекта персональных данных на обработку его персональных данных</li>
                <li>Исполнение договора, стороной которого является субъект персональных данных</li>
                <li>Соблюдение требований законодательства Российской Федерации</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">5. Защита персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы принимаем необходимые организационные и технические меры для защиты персональных данных пользователей от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Доступ к персональным данным имеют только уполномоченные сотрудники, которые ознакомлены с требованиями законодательства о защите персональных данных.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">6. Передача персональных данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Персональные данные пользователей не передаются третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Пользователь дал согласие на такую передачу</li>
                <li>Передача необходима для исполнения договора с пользователем</li>
                <li>Передача предусмотрена законодательством Российской Федерации</li>
                <li>Передача осуществляется в рамках продажи или реорганизации бизнеса</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">7. Сроки хранения персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 3 (трех) лет с момента последнего взаимодействия с пользователем, если иное не предусмотрено законодательством.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">8. Права пользователей</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Пользователь имеет право:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие оператора в уполномоченный орган</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Для реализации своих прав пользователь может обратиться по адресу электронной почты: noxs.studio@yandex.ru
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">9. Файлы cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Сайт использует файлы cookie для улучшения работы и персонализации контента. Cookie — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Пользователь может отключить использование cookie в настройках своего браузера, однако это может повлиять на функциональность Сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">10. Изменения в Политике</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия Политики всегда доступна на данной странице. Рекомендуем периодически проверять эту страницу на предмет изменений.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">11. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>Email: <a href="mailto:noxs.studio@yandex.ru" className="text-foreground hover:text-accent transition-colors">noxs.studio@yandex.ru</a></li>
                <li>Телефон: <a href="tel:+79938986911" className="text-foreground hover:text-accent transition-colors">+7 993 898 6911</a></li>
                <li>Telegram: <a href="https://t.me/noks_studio" className="text-foreground hover:text-accent transition-colors">@noks_studio</a></li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
