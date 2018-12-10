// Def add-title function
function addTitle(className, idName, text){
  $("#content").append(`<div class="`+className+`" id="`+idName+`">
    <h3>`+text+`</h3></div>`);
}

// Def add-video function
function addVideo(idName, className, srcCode, text, groupNo){
  var v=`
    <!-- Grid column1 -->
        <div class="col-sm mb-4 `+className+`">
          <!--Modal: Name-->
          <div class="modal fade" id="`+idName+`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <!--Content-->
              <div class="modal-content">
                <!--Body-->
                <div class="modal-body mb-0 p-0">
                  <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+srcCode+`"
                  allowfullscreen></iframe>
                  </div>
                </div>
                <!--Footer-->
                <div class="modal-footer justify-content-center">
                  <span class="mr-4">`+text+`</span>
                  <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                </div>
              </div>
              <!--/. End of Content-->
            </div>
          </div>
          <!-- End of Modal: Name-->
          <div class="video_box">
            <a><img class="play_button" src="/leopard/resources/img/play_button.png"
              data-toggle="modal" data-target="#`+idName+`"></a>
            <a><img class="img-fluid z-depth-1" src="https://img.youtube.com/vi/`+srcCode+`/mqdefault.jpg" alt="video"
                data-toggle="modal" data-target="#`+idName+`"></a>
            <p>`+text+`</p>
          </div>
        </div>
      <!-- End of Grid column1 -->`
      // $(".row:"+groupNo).append(v);
      $(".row:eq("+groupNo+")").append(v)
}

// Def add video group function, adding 5 videos in one row at a time
function addVideoGroup(className, srcGroup, textGroup, groupNo, count){
  for(var i=1; i<=5; i++){
    addVideo(className+"_vid_"+(count*5+i), className, srcGroup[i-1], textGroup[i-1],
    groupNo);
  }
}

// Def add-button function when the number of videos is greater than 5
function addButton(idName){
  $("#content").append(`<button class="load" id="`+idName+`">LOAD MORE</button>`)
}

// Python: Def load more function if click button
function loadMore_python(id){
  var count = 0;
  $(id).click(function(){
    count++;
    if(count==1){
      // Second Python Video Row - 5
      addVideoGroup("python",
      ["6TEGxJXLAWQ", "iVyWLmQ0QYA", "ZEZdys-fHDw", "wfcWRAxRVBA", "WOwi0h_-dfA"],
      ["Python Tutorial for Absolute Beginners #6 - While Loops and The Break Statement",
      "Python Tutorial for Absolute Beginners #7 - More About For Loops",
      "Python Tutorial for Absolute Beginners #8 - How To Use Dictionaries",
      "Python Tutorial for Absolute Beginners #9 - Classes and Objects - Part 1",
      "Python Tutorial for Absolute Beginners #10 - Classes and Objects - Part 2"],
      0, count);
    }else if (count==2) {
      // Third Python Video Row - 5
        addVideoGroup("python",
        ["r526yum0EYQ", "5K08WcjGV6c", "2u_ZExcNBzA", "lx7oqZ7Nl3k", "W0wWwglE1Vc"],
        ["Python Tutorial for Absolute Beginners #11 - Using Boolean",
        "Python Tutorial for Absolute Beginners #12 - List Comprehension Basics",
        "Python Tutorial for Absolute Beginners #13 - How To Use Sets",
        "Python Tutorial for Absolute Beginners #14 - 6 Python Exercise Problems for Beginners",
        "Python Tutorial for Absolute Beginners #15 - How To Create A Twitter Bot"],
        0, count);
        $(id).hide();
    }
  });
}

// Java: Def load more function if click button
function loadMore_java(id){
  var count = 0;
  $(id).click(function(){
    count++;
    if(count==1){
      // Second Java Video Row - 5
      addVideoGroup("java",
      ["ss7BtLrbxp4", "f5YdkIzNmfM", "f5YdkIzNmfM", "HBnB69yFf_4", "L5_7XQR0r0w"],
      ["Java Tutorial For Beginners 6 - Math and Arithmetic Operators",
      "Java Tutorial For Beginners 7 - Increment Operator and Assignment Operator",
      "Java Tutorial For Beginners 8 - IF ... ELSE Statements and Relational Operators",
      "Java Tutorial For Beginners 9 - Logical Operators in Java",
      "Java Tutorial For Beginners 10 - Switch Statement in Java"],
      1, count);
    }else if (count==2) {
      // Third Java Video Row - 2
        addVideo("java_vid_"+(count*5+1), "java", "apW3UWr_dhA", "Java Tutorial For Beginners 11 -  The while Statements (while Loops)", 1);
        addVideo("java_vid_"+(count*5+2), "java", "xwvdENKCkLg", "Java Tutorial For Beginners 12 - The do-while Statements (do-while Loops)", 1);
        $(id).hide();
    }
  });
}

// Javascript: Def load more function if click button
function loadMore_javascript(id){
  var count = 0;
  $(id).click(function(){
    count++;
    if(count==1){
      // Second Javascript Video Row - 1
      addVideo("javascript_vid_"+(count*5+1), "javascript", "5nuqALOHN1M", "Beginner JavaScript Tutorial - 6 - Functions", 2);
      $(id).hide();
    }
  });
}

$(document).ready(function(){
// Add Python videos - 16
  // Title
  addTitle("tech_title", "python_title", "Python Tutorial from CS Dojo");
  // First Python Video Rows - 5
  $("#content").append(`<div class="row" id="video_group1">`);
  addVideoGroup("python",
  ["Z1Yd7upQsXY", "AWek49wXGzI", "NSbOtYzIQI0", "tw7ror9x32s", "OnDr4J2UXSA"],
  ["Python Tutorial for Absolute Beginners #1 - What Are Variables?",
  "Python Tutorial for Absolute Beginners #2 - How to Use If Else Statements?",
  "Python Tutorial for Absolute Beginners #3 - How To Use Functions?",
  "Python Tutorial for Absolute Beginners #4 - Introduction To Lists In Python",
  "Python Tutorial for Absolute Beginners #5 - Introduction to For Loops"],
  0, 0);
  $("#content").append(`</div>`);
  // Load More Button and Enable Load More function
  addButton("load_1");
  loadMore_python("#load_1");

// Add Java videos - 12
  // Title
  addTitle("tech_title", "java_title", "Java Tutorial from Programming Knowledge");
  // First Java Video Rows - 5
  $("#content").append(`<div class="row" id="video_group2">`);
  addVideoGroup("java",
  ["r59xYe3Vyks", "gzlhm0jco0g", "U8wrZRYAnmI", "4ekASokneGU", "qgMH6jOOFOE"],
  ["Java Tutorial For Beginners 1 - Introduction and Installing the java (JDK)",
  "Java Tutorial For Beginners 2 - Installing Eclipse IDE and Setting up Eclipse",
  "Java Tutorial For Beginners 3 - Creating First Java Project in Eclipse IDE",
  "Java Tutorial For Beginners 4 - Variables and Types",
  "Java Tutorial For Beginners 5 - Getting User Input"],
  1, 0);
  $("#content").append(`</div>`);
  // Load More Button and Enable Load More function
  addButton("load_2");
  loadMore_java("#load_2");

// Add Javascript videos - 6
  // Title
  addTitle("tech_title", "javascript_title", "JavaScript Tutorial from theNewBoston");
  // First javascript Video Rows - 5
  $("#content").append(`<div class="row" id="video_group3">`);
  addVideoGroup("javascript",
  ["yQaAGmHNn9s", "yUyJ1gcaraM", "og4Zku5VVl0", "sY8qiSaAi9g", "QLpghQ2MMfs"],
  ["Beginner JavaScript Tutorial - 1 - Introduction to JavaScript",
  "Beginner JavaScript Tutorial - 2 - Comments and Statements",
  "Beginner JavaScript Tutorial - 3 - Variables",
  "Beginner JavaScript Tutorial - 4 - Different Types of Variables",
  "Beginner JavaScript Tutorial - 5 - Using Variables with Strings"],
  2, 0);
  $("#content").append(`</div>`);
  // Load More Button and Enable Load More function
  addButton("load_3");
  loadMore_javascript("#load_3");
});
