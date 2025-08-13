import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@vkontakte/vkui/dist/vkui.css'
import '@vkontakte/vkui/dist/components.css'
import { AppRoot } from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge'

bridge.send('VKWebAppInit')

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRoot>
			<App />
		</AppRoot>
	</StrictMode>,
)
