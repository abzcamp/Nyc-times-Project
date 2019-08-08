
    
     $(function() {
        // console.log("ready!")
        $('#my-select-menu').on('change', function(event) {
            event.preventDefault()
            $('.remove').remove()
            let newsInput = $('#my-select-menu').val()
            console.log(newsInput)
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${newsInput}.json?api-key=8jjm1KEG23fQSFGvGbIWBOAyt2Yd6jqW`)
            .done(function(data) {
            console.log(data)
                $.each(data.results, function () {
                    let newsTitle = this.abstract
                    let picURL = this.multimedia[4].url
                    // create div  to hold album cover and name
                    $('.news').append(`<img src="${picURL}"><p>${newsTitle}</p>`).children().addClass('remove')
                    
                    
                    })
                })
                .fail(function() {
                alert("Page not Found") 
                })
            })
        })




    