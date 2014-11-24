//get all project
function getProjects(redmine_url,apikey){

  return $.ajax({
    type : "GET", 
         url : redmine_url + "/projects.json?key=" + apikey, 
         contentType : 'text/plain; charset=utf-8', 
         dataType : "json", 
         success : function(data) { 
           
           if (data == null || data == undefined) { 
             console.log("getProjects:Transaction error. ");
             return;
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log("getProjects:Server Error. Pleasy try again later.");
                 },
         complete : function() { 
                      
                    }
  })
}

//get Member of a project
function getMenmbers(redmine_url,apikey,projectName){

  return $.ajax({
    type : "GET", 
         url : redmine_url  +  "/projects/" + projectName  + "/memberships.json?key=" + apikey, 
         contentType : 'text/plain; charset=utf-8', 
         dataType : "json", 
         success : function(data) { 
           
           if (data == null || data == undefined) { 
             console.log("getMenmbers:Transaction error. ");
             return;
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log("getMembers:Server Error . Pleasy try again later." + errorThrown);
                 },
         complete : function() { 
                    }
  });
}

//get all trackers
function getTrackers(redmine_url,apikey,projectName){

  return $.ajax({
    type : "GET", 
         url : redmine_url  +  "/trackers.json?key=" + apikey, 
         contentType : 'text/plain; charset=utf-8', 
         dataType : "json", 
         success : function(data) { 
           
           if (data == null || data == undefined) { 
             console.log("getTrackers:Transaction error. ");
             return;
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log("getTrackers:Server Error . Pleasy try again later.");
                 },
         complete : function() { 
                    }
  });
}

//create issues 
function createIssue(redmine_url,apikey,issue){

  return $.ajax({
    type : "POST", 
         url : redmine_url  +  "/issues.json?key=" + apikey, 
         async : false,
         contentType : 'application/json', 
         dataType : "json", 
         data : JSON.stringify(issue),
         success : function(data) { 
           console.log("createIssue:succeed");
           
           if (data == null || data == undefined) { 
             console.log("createIssue:Transaction error. ");
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log(errorThrown);
                   console.log("createIssue:Server Error . Pleasy try again later.");
                 },
         complete : function() { 
                    }
  });
}

function updateIssue(redmine_url,apikey,issue,issue_id){

  return $.ajax({
    type : "PUT",
         url : redmine_url  +  "/issues/" + issue_id + ".json?key=" + apikey,
         async : false,
         contentType : 'application/json',
         dataType : "json",
         data : JSON.stringify(issue),
         success : function(data) {
           console.log("updateIssue:succeed");
           if (data == null || data == undefined) {
             console.log("updateIssue:Transaction error. ");
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log(errorThrown);
                   console.log("updateIssue:Server Error . Pleasy try again later.");
                 },
         complete : function() {
                    }
  });
}


function getIssues(redmine_url,apikey){

  return $.ajax({
    type : "GET",
         url : redmine_url  +  "/issues.json?assigned_to_id=me&key=" + apikey,
         contentType : 'text/plain; charset=utf-8',
         dataType : "json",
         success : function(data) {

           if (data == null || data == undefined) {
             console.log("getIssues:Transaction error. ");
             return;
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log("getIssues:Server Error . Pleasy try again later.");
                 },
         complete : function() {
                    }
  });
}

function getIssue(redmine_url, apikey, id){

  return $.ajax({
    type : "GET",
         url : redmine_url  +  "/issues/" + id  + ".json?key=" + apikey + "&include=journals",
         contentType : 'text/plain; charset=utf-8',
         dataType : "json",
         success : function(data) {

           if (data == null || data == undefined) {
             console.log("getIssue:Transaction error. ");
             return;
           }
         },
         error : function(XMLHttpRequest, textStatus, errorThrown) { //
                   console.log("getIssue:Server Error . Pleasy try again later.");
                 },
         complete : function() {
                    }
  });
}

//get issue statuses
function getStatuses(redmine_url,apikey){

    return $.ajax({
          type : "GET",
                    url : redmine_url  +  "/issue_statuses.json",
                    contentType : 'text/plain; charset=utf-8',
                    dataType : "json",
                    success : function(data) {

                                 if (data == null || data == undefined) {
                                                console.log("getMenmbers:Transaction error. ");
                                                             return;
                                                                        }
                                          },
                    error : function(XMLHttpRequest, textStatus, errorThrown) { //
                                                 console.log("getMembers:Server Error . Pleasy try again later." + errorThrown);
                                                                  },
                    complete : function() {
                                                     }
      });
}
