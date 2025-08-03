# neo-design-patterns-hw-08

# Реалізовані патерни
Composite — для моделювання деревоподібної структури документа (Section, Paragraph, List).

Bridge — для рендерингу у різні формати (Markdown, HTML, Plain Text) через інтерфейс DocRenderer.

Observer (Спостерігач) — для відслідковування процесу рендерингу.

# Як реалізовано патерн Observer
Компоненти:
RenderEventPublisher — зберігає список підписників і розсилає їм події рендерингу.

RenderEventSubscriber — інтерфейс, який реалізують підписники.

RenderContext — структура даних, яка описує подію рендерингу: тип елемента, вміст, рівень, час тощо.

Підписники:

RenderLoggerSubscriber — логування рендерингу.

SummaryCollector — підрахунок елементів.

PerformanceSubscriber — замір часу рендерингу.

Приклад підключення підписників:

const logger = new RenderLoggerSubscriber();
const summary = new SummaryCollector();
const perf = new PerformanceSubscriber();

RenderEventPublisher.subscribe(logger);
RenderEventPublisher.subscribe(summary);
RenderEventPublisher.subscribe(perf);

# Приклад виводу у консолі:
[Log] Rendered Paragraph (44 chars)
[Log] Rendered List (3 items)
[Log] Rendered Section ("Composite", level 2)
[Log] Rendered Paragraph (34 chars)
[Log] Rendered List (2 items)
[Log] Rendered Section ("Bridge", level 2)
[Log] Rendered Section ("Основні патерни", level 2)
[Log] Rendered Section ("Структурні патерни", level 1)
[Summary] Rendered 4 sections, 3 paragraphs, 2 lists
[Performance] Total render time: 5ms

# Структура проєкту
src/
├── main.ts
├── RenderEventPublisher.ts
├── interfaces/
│   ├── RenderEventSubscriber.ts
│   ├── RenderContext.ts
│   └── DocRenderer.ts
├── subscribers/
│   ├── RenderLoggerSubscriber.ts
│   ├── SummaryCollector.ts
│   └── PerformanceSubscriber.ts
├── nodes/
│   ├── Section.ts
│   ├── Paragraph.ts
│   └── List.ts
├── renderers/
│   ├── BaseRenderer.ts
│   ├── MarkdownRenderer.ts
│   ├── HTMLRenderer.ts
│   └── PlainTextRenderer.ts
└── factories/
    └── RendererFactory.ts
