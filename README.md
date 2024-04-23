Menu in list form, based on esx_menu_list, created for users who don't use the ESX framework. We designed this list due to the decreasing number of ESX framework users. Discord: https://discord.com/invite/mgwjDpwfdu

TEMPLATE: 
```
	local data = {
		searchEnabled = true, --Search bar.
		title = "Title", --Title on the list.
		columns = {
			{name = "Category 1", width = 25, numChars = 18}, --Column width percentage and the number of characters after which the text is truncated.
			{name = "Category 2", width = 25, numChars = 18},
			{name = "Category 3", width = 25, numChars = 18},
			{name = "Category 4", width = 25, numChars = 18}
		},
		data = {
			{"Long Text Long Text Long Text Long Text Long Text Long Text Long Text Long Text", "Text", "Text", {{text = "Button 1", id = "button1"}}},
			{"Text", "Text", "Text", {{text = "Button 1", id = "button2"}}},
			{"Text", "Text", "Text", {{text = "Button 1", id = "button3"}}},
			{"Text", "Text", "Text", {{text = "Button 1", id = "button4"}}},     
		}
	}
	local Menu = exports['glow-menu-list']:OpenMenuList(data)
	if Menu.ButtonData == 'button1' then
		--Your Code
	end
```
![](https://media.discordapp.net/attachments/1077621817512038463/1232395685740019712/image.png?ex=66294d6c&is=6627fbec&hm=75c9df07e5007aa115e88bdf456c9a420ba840d3e5fea3aa85865cc6e0b40279&=&format=webp&quality=lossless&width=1005&height=396)

![](https://media.discordapp.net/attachments/1077621817512038463/1232395686125764698/tak.png?ex=66294d6c&is=6627fbec&hm=da644144f89d3feaa9fcb8edbc4f0fe978afa6e551f6303f60969c743ff954f5&=&format=webp&quality=lossless&width=1045&height=550)
