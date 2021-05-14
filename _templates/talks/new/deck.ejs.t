---
to: talks/<%= title.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() %>/<%= title.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() %>.mdx
---

import { default as fragaria } from "@tech-talks/common/theme";
import BaseLayout from "@tech-talks/common/layouts/BaseLayout";
import IntroLayout from "@tech-talks/common/layouts/IntroLayout";
import KeyStatementLayout from "@tech-talks/common/layouts/KeyStatementLayout";
import FinalLayout from "@tech-talks/common/layouts/FinalLayout";

export const theme = fragaria

<Head>
  <title><%= title %> | Fragaria tech talks</title>
  <link rel="preload" href="https://res.cloudinary.com/fragaria/raw/upload/v1534234755/fragaria.cz/fonts/TriviaGroteskN2-Bold.woff" as="font" type="font/woff" crossorigin />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&amp;display=swap" rel="stylesheet" />
</Head>

<IntroLayout author="<%= author %>"><%= title %></IntroLayout>

---

<BaseLayout>

A first slide content.

</BaseLayout>

---

<FinalLayout>

That's it!

Thanks for your time.

</FinalLayout>
