import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Пользовательское соглашение | НОКС",
  description: "Пользовательское соглашение веб-студии НОКС",
}

export default function TermsPage() {
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
            Пользовательское соглашение
          </h1>
          <p className="text-muted-foreground mb-12">
            Последнее обновление: 14 апреля 2026 года
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между веб-студией НОКС (далее — Исполнитель) и физическим или юридическим лицом (далее — Пользователь), использующим веб-сайт noks.studio (далее — Сайт).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Использование Сайта означает полное и безоговорочное согласие Пользователя с условиями настоящего Соглашения.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Если Пользователь не согласен с условиями Соглашения, он обязан немедленно прекратить использование Сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">2. Предмет соглашения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Исполнитель предоставляет Пользователю доступ к информации о своих услугах, размещенной на Сайте, а также возможность направить заявку на оказание услуг.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Услуги Исполнителя включают, но не ограничиваются: разработка веб-сайтов, лендингов, корпоративных порталов, интернет-магазинов, веб-приложений, автоматизация бизнес-процессов, техническая поддержка и сопровождение.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">3. Права и обязанности сторон</h2>
              
              <h3 className="font-medium text-lg mb-3 mt-6">3.1. Исполнитель обязуется:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Предоставлять актуальную и достоверную информацию об услугах</li>
                <li>Обрабатывать заявки Пользователей в разумные сроки</li>
                <li>Соблюдать конфиденциальность персональных данных Пользователей</li>
                <li>Оказывать услуги качественно и в согласованные сроки</li>
                <li>Информировать Пользователя о ходе выполнения работ</li>
              </ul>

              <h3 className="font-medium text-lg mb-3 mt-6">3.2. Исполнитель имеет право:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Изменять содержание Сайта без предварительного уведомления</li>
                <li>Приостанавливать работу Сайта для технического обслуживания</li>
                <li>Отказать в оказании услуг без объяснения причин</li>
                <li>Изменять условия настоящего Соглашения</li>
              </ul>

              <h3 className="font-medium text-lg mb-3 mt-6">3.3. Пользователь обязуется:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Предоставлять достоверную информацию при заполнении форм</li>
                <li>Соблюдать условия настоящего Соглашения</li>
                <li>Не использовать Сайт в противоправных целях</li>
                <li>Не предпринимать действий, нарушающих работу Сайта</li>
                <li>Своевременно оплачивать заказанные услуги</li>
              </ul>

              <h3 className="font-medium text-lg mb-3 mt-6">3.4. Пользователь имеет право:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Получать информацию об услугах Исполнителя</li>
                <li>Направлять заявки на оказание услуг</li>
                <li>Получать консультации по вопросам оказания услуг</li>
                <li>Требовать соблюдения конфиденциальности своих данных</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">4. Порядок оказания услуг</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Оказание услуг осуществляется в следующем порядке:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>Пользователь направляет заявку через форму на Сайте или иным способом</li>
                <li>Исполнитель связывается с Пользователем для уточнения деталей</li>
                <li>Стороны согласовывают техническое задание и стоимость работ</li>
                <li>Пользователь производит предоплату в согласованном размере</li>
                <li>Исполнитель выполняет работы согласно техническому заданию</li>
                <li>Пользователь принимает работы и производит окончательный расчет</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Детальные условия оказания услуг определяются отдельным договором между сторонами.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">5. Стоимость услуг и порядок оплаты</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Стоимость услуг определяется индивидуально для каждого проекта на основании технического задания и сложности работ.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Оплата производится в рублях Российской Федерации безналичным переводом на реквизиты Исполнителя.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Стандартный порядок оплаты: предоплата 50% от стоимости проекта, окончательный расчет — после сдачи работ.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">6. Интеллектуальная собственность</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Все материалы, размещенные на Сайте (тексты, изображения, логотипы, дизайн), являются интеллектуальной собственностью Исполнителя и защищены законодательством об авторском праве.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Копирование, воспроизведение, распространение материалов Сайта без письменного согласия Исполнителя запрещено.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Права на результаты работ, выполненных для Пользователя, переходят к Пользователю после полной оплаты, если иное не предусмотрено договором.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">7. Ответственность сторон</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Исполнитель не несет ответственности за:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Временную недоступность Сайта по техническим причинам</li>
                <li>Убытки, возникшие в результате использования информации с Сайта</li>
                <li>Действия третьих лиц</li>
                <li>Обстоятельства непреодолимой силы</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ответственность сторон по договору оказания услуг определяется условиями соответствующего договора.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">8. Конфиденциальность</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Стороны обязуются сохранять конфиденциальность информации, полученной в ходе сотрудничества, включая:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Коммерческую информацию</li>
                <li>Техническую документацию</li>
                <li>Персональные данные</li>
                <li>Условия сотрудничества</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Обработка персональных данных осуществляется в соответствии с{" "}
                <Link href="/privacy" className="text-foreground hover:text-accent transition-colors underline">
                  Политикой конфиденциальности
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">9. Разрешение споров</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Все споры, возникающие из настоящего Соглашения, стороны стремятся разрешить путем переговоров.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                При невозможности достижения согласия спор передается на рассмотрение в суд по месту нахождения Исполнителя в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">10. Срок действия и изменение соглашения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настоящее Соглашение вступает в силу с момента начала использования Сайта Пользователем и действует бессрочно.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Исполнитель вправе в любое время изменить условия Соглашения. Изменения вступают в силу с момента публикации новой редакции на Сайте. Продолжение использования Сайта после внесения изменений означает согласие с новой редакцией Соглашения.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">11. Заключительные положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настоящее Соглашение регулируется законодательством Российской Федерации.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Если какое-либо положение Соглашения будет признано недействительным, остальные положения продолжают действовать.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Все вопросы, не урегулированные настоящим Соглашением, разрешаются в соответствии с действующим законодательством.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">12. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться:
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
