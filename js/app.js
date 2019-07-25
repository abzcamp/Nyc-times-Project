//Vanilla js
// let el = document.getElementsByClassName('text')
// el[0].style.color = "red"

// console.log(el)

//jquery

// $(function() {

// let $el = $("article p:nth-child(2)").css("color", "red")
// console.log($el)

// })

//method(2)

// $(function() {

//     let $el = $("#second-line").css("color", "green")
//     console.log($el)
    
//     })

//method (3)
// $(function() {

//     let $el = $("html article p:last-child").css("color", "blue")
//     console.log($el)
    
//     })


    // $(function() {

    //     $("div").on("click", "button", function(event) {
    //         alert("you clicked me")
    //     })
        
    //     $("div").append("<button>Click Me</button>")
        
    //     })


    // $(function() {

    //     $('button').on('click', event => {
    //         let $newItem = $('input').val()
    //         console.log($newItem)
            
    //         $('.my-list').append(`<li><span>${$newItem}</span><a href="#" class="delete">[done]</a></li>`)
    //         $('input').val("")
    //     });

    //     $('.my-list').on('click', 'a', function(event) {

    //         $(event.target).siblings().css('text-decoration', 'line-through')

    //     })
        
    // })


    // let $sibling = $('a').$sibling()

    // $(function () {

    //     $('a').on('click', function(event) {
    //         $('li').toggle('slow').show() // slow or fast 
    //     })
    
    // })


    // $(function () {

    //     $('a').on('click', function(event) {
     
    //         let $sibling = $(event.target).siblings()
     
    //         $sibling.toggle('slow').show()
    //     })
    //     $(this).siblings('p').toggle('slow').show();
    //  })


    // $(function () {

    //     $('a').click(function (event) {
 
    //     let $sibling = $(this).next('p');
 
    //     $('p').each(function() {
    //         let $answer = $(this);
    //         if (!$answer.is($sibling)) {
    //             $(this).toggle('slow').hide();
    //         }
    //      })
    //      $(this).siblings('p').toggle('slow').show();
    //   });

    // })


    // $("#my-select-menu").on('change', function(event){
    //     console.log($(event.target).val())

    //     let $selection = $("#my-select-menu").val()

    // })


    // $("button").on("click", function(data) {
    //     $.getJSON('https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02').done(function(data) {

    //       $.each(data, function(key, value) {
    //         $('.repo-list').append(data)
    //       });
    //     });
    //   });


    // $(function() {

    //     $("button").on("click", function() {
    //         $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=4a48e1e1428fd83889074671fbf259d9")
            
    //         .done(function(data) {

    //             console.log(data)
                
    //         //   $.each(data, function(key, value) {
    //             $('.results').append(`<p>${data.weather['0'].main}</p>`)
    //             //   console.log(value)
    //             // console.log(`Key: ${key}, Value: ${value}`)
    //           });
    //         });
    //       });




    // $(function() {

    //     $('input:submit').on('click', function() {
    //         // console.log('hello')
            
    //         $.getJSON("https://itunes.apple.com/search?entity=album&limit=6&term=Drake")
    
    //         .done(function(data) {
    //             // let $data =  JSON.stringify(data)
    //             console.log(data)
    //            console.log(data)
    //             $('.album-list').append(`<li>${data.results['0'].collectionName}</li>`);
            
    //         });
    //      });
    
    // })

    $('input:submit').on('click', (e) => {
        e.preventDefault()
        $('.remove').remove()
        let $artistInput = $('input:text').val().replace(' ', '+' )
        console.log($artistInput)
         $.getJSON("https://itunes.apple.com/search?entity=album&limit=6&&term=" + $artistInput)
         .done(function(data) {
             console.log(data)
             $.each(data.results, function(index, object) {
                 console.log(object.collectionName)
                let albumName =  object.collectionName
                let artURL = object.artworkUrl100
                // create div to hold album cover and name
                $('.album-list').append(`<div><img src="${artURL}"><p>${albumName}</p> </div>`).children().addClass('remove')
                
             })
         })
         .fail(function() {
             alert('it')
         })
    })
    
        




    // https://api.nytimes.com/svc/topstories/v2/science.json?api-key=8jjm1KEG23fQSFGvGbIWBOAyt2Yd6jqW
    // $.getJSON(`"https://api.nytimes.com/svc/topstories/v2/${variableName}.json?api-key=WGAHEZGJPWfA9djV2CzpQQU35fl90WTT"`)
