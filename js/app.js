
    
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
           let array = []
           for (let i=0; i < 12; i++){
               array.push(data.results[i])
               console.log(array)
           }
           

                $.each(array, function(index, value) {
                    console.log("index",index)
                    console.log("value",value)
                    console.log(value.title)

                     
                    console.log(data.results)
                    let newsTitle = value.abstract
                console.log(newsTitle)
                let picURL = this.multimedia[4].url
                console.log(this)
                $('.news').append(`<div class="attach"><img src="${picURL}"><p class= target>${newsTitle}</p></div>`)


                
                
                // create div  to hold album cover and name
                
                
                })

           
                })
                .fail(function() {
                alert("Page not Found") 
                })
            })
        })




    