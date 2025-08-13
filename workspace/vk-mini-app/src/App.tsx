import { useEffect, useState } from 'react'
import { AdaptivityProvider, Button, Group, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge'

function App() {
	const [activePanel, setActivePanel] = useState('home')
	const [userName, setUserName] = useState<string>('')

	useEffect(() => {
		bridge
			.send('VKWebAppGetUserInfo')
			.then((data: any) => setUserName(data.first_name))
			.catch(() => {})
	}, [])

	return (
		<AdaptivityProvider>
			<SplitLayout>
				<SplitCol>
					<View activePanel={activePanel}>
						<Panel id="home">
							<PanelHeader>VK Mini App</PanelHeader>
							<Group>
								<Button size="l" onClick={() => setActivePanel('home')}>Здравствуйте{userName ? `, ${userName}` : ''}!</Button>
							</Group>
						</Panel>
					</View>
				</SplitCol>
			</SplitLayout>
		</AdaptivityProvider>
	)
}

export default App
