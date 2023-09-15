import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: 'https://kylebutts.github.io',
  base: '/stata2r_v2',
	integrations: [
		starlight({
			title: "stata2R",
			social: {
				github: "https://github.com/stata2r/stata2r.github.io/",
			},
			customCss: ["./src/styles/main.css"],
			sidebar: [
				{
					label: "Guides",
					items: [
            {
							label: "Intro",
							link: "/",
						},
						{
							label: "data.table",
							link: "/guides/data_table/",
						},
						{
							label: "fixest",
							link: "/guides/fixest/",
						},
						{
							label: "extras",
							link: "/guides/extras/",
						},
					],
				},
			],
		}),
		tailwind({
      applyBaseStyles: false,
    }),
	],
})
