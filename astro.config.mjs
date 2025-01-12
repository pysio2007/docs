// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian' // obsidian 插件


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pysio Docs',
			social: {
				github: 'https://github.com/pysio2007/docs',
			},
			plugins: [
				starlightObsidian({
					vault: './vault',
				}),
			],
			sidebar: [
				obsidianSidebarGroup,
			],
		}),
	],
});
