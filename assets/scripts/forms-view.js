{
//  for view home and interview-list following code will hide and unhide the 4 forms
    // visibility of the form is managed here.
    const StudentFormBtn = $("#create-student-form");
    const interviewFormBtn = $("#create-interview-form");
    const companyFormBtn = $("#create-company-form");
    const batchFormBtn = $("#create-batch-form");
        // initializing the visibility hidden
    StudentFormBtn.css("visibility","hidden");
    interviewFormBtn.css("visibility","hidden");
    companyFormBtn.css("visibility","hidden");
    batchFormBtn.css("visibility","hidden");

    $("#student-create-btn").click(()=>{
        StudentFormBtn.css("visibility","initial");
        $("#close-form",StudentFormBtn).click(()=>{
            StudentFormBtn.css("visibility","hidden");
        })
    })

    $("#interview-create-btn").click(()=>{
        interviewFormBtn.css("visibility","initial");
        $("#close-form",interviewFormBtn).click(()=>{
            interviewFormBtn.css("visibility","hidden");
        })
    })

    $("#company-create-btn").click(()=>{
        companyFormBtn.css("visibility","initial");
        $("#close-form",companyFormBtn).click(()=>{
            companyFormBtn.css("visibility","hidden");
        })
    })
    
     $("#batch-create-btn").click(()=>{
        batchFormBtn.css("visibility","initial");
        $("#close-form",batchFormBtn).click(()=>{
            batchFormBtn.css("visibility","hidden");
        })
    })
}