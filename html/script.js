var config = {};

$(document).ready(function() {
    window.addEventListener('message', function (event) {
      var data = event.data;
        if (data.action == "openMenuList") {
            config = data.data
            var bodyOption = document.querySelector("body");
            bodyOption.style.display = "flex"; 
            const categoryTable = $("#categoryTable");
            const dataTable = $("#dataTable");

            const tr = $("<tr>");

            config.columns.forEach(column => {
                const th = $("<th>").text(column.name);
                th.css("width", column.width);
                tr.append(th); 
            });

            categoryTable.append(tr); 

            config.data.forEach(rowData => {
                const tr = $("<tr>").addClass("data-item");
                rowData.forEach((cellData, index) => {
                    const td = $("<td>");
                    const width = parseFloat(config.columns[index].width);
                    td.css("width", width + "%");

                    if (typeof cellData === 'string') {
                        const numChars = config.columns[index].numChars;
                        if (cellData.length > numChars) {
                            const truncatedText = cellData.substring(0, numChars) + "...";
                            td.text(truncatedText);
                            const showFullText = () => {
                                $("#fullTextContent").text(cellData);
                                $("#fullTextOverlay").show();
                            };
                            const eyeIcon = $("<span>").text("👁️").css("cursor", "pointer");
                            eyeIcon.click(showFullText);
                            td.append(eyeIcon);
                        } else {
                            td.text(cellData);
                        }
                    } else if (typeof cellData === 'object') {
                        cellData.forEach(button => {
                            const btn = $("<button>").text(button.text);
                            btn.attr('id', button.id); 
                            btn.click(function() {
                                var bodyOption = document.querySelector("body");
                                var Colums = document.getElementById('categoryTable');
                                   var Dane = document.getElementById('dataTable');
                                bodyOption.style.display = "none"; 
                                $.post('https://glow-menu-list/click', JSON.stringify({
                                    ButtonData: button.id
                                }));
                                Colums.innerHTML = '';
                                Dane.innerHTML = '';
                                config = {}  
                            });
                            td.append(btn);
                        });
                    }

                    tr.append(td);
                });
                dataTable.append(tr);
            });

            $("#searchInput").on("input", function() {
                let filter = $(this).val().toUpperCase();
                let dataRows = $(".data-item");

                dataRows.each(function() {
                    let dataCells = $(this).find("td");
                    let visible = false;

                    dataCells.each(function() {
                        let cellText = $(this).text().toUpperCase();
                        if (cellText.indexOf(filter) > -1) {
                            visible = true;
                            return false;
                        }
                    });

                    if (visible) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });

                let dataContainer = $(".data-container");
                let data = $(".data");

                if (data.prop("scrollHeight") > 300) {
                    dataContainer.addClass("show-scrollbar");
                } else {
                    dataContainer.removeClass("show-scrollbar");
                }
            });

            $("#closeFullTextBtn").click(function() {
                $("#fullTextOverlay").hide();
            });

            $(".close-btn").click(function() {
		        var bodyOption = document.querySelector("body");
            	var Colums = document.getElementById('categoryTable');
           	    var Dane = document.getElementById('dataTable');
            	bodyOption.style.display = "none"; 
            	$.post('https://glow-menu-list/click', JSON.stringify({
                ButtonData: 'close'
                }));
                Colums.innerHTML = '';
                Dane.innerHTML = '';
                config = {}    
            });
            if (!config.searchEnabled) {
                $(".search-input").hide();
            }
            if (config.title) {
                $("#pageTitle").text(config.title);
                $("title").text(config.title);
            }
        } else if (data.action == "closeMenuList") {
            var bodyOption = document.querySelector("body");
            var Colums = document.getElementById('categoryTable');
            var Dane = document.getElementById('dataTable');
            bodyOption.style.display = "none"; 
            $.post('https://glow-menu-list/click', JSON.stringify({
                ButtonData: 'close'
            }));
            Colums.innerHTML = '';
            Dane.innerHTML = '';
            config = {}    
    }});
});
