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
	local Menu = OpenMenuList(data)
	if Menu.ButtonData == 'button1' then
		--Your Code
	end
```
