local list = nil

local function OpenMenuList(data)
	if list then return end
	list = promise.new()
	SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'openMenuList',
        data = data
    })
	return Citizen.Await(list)
end

local function CloseMenuList()
    if not list then return end
	SetNuiFocus(false, false)
    SendNUIMessage({
        action = 'closeMenuList'
    })
    list:resolve(nil)
    list = nil
end

RegisterNUICallback('click', function(data, cb)
    local promise = list
    list = nil
    promise:resolve(data)
    SetNuiFocus(false, false)
    cb(1)
end)

exports('OpenMenuList', OpenMenuList)
exports('CloseMenuList', CloseMenuList)

RegisterCommand('listmenutest', function()
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
end)