const schools = [{
    name: "IAUCTB",
    website: "http://www.iauctb.ac.ir",
    students: [
        {
            id: 1, studentCode: "930225820", firstName: "Ashkan",
            lastName: "Taravati", fathersName: "Jamaleddin",
            dateOfBirth: Date("1995-10-20"), ssn: "09876543210", homeTel: "02122334455",
            gpa(){
                let scores = this.courses.map(c=> c.score)
                // [14.5,16.5,17.5,18.5,14.5]
            },
            // mathScore:18.0,physicsScore:14.5
            // gpa:16.33
            courses:[
                {title:"Physics",teacher:schools[0].teachers[0], score:14.5,submissionDate:Date("2020-02-02")},
                {title:"Math",teacher:"Dr. Mahmoudi", score:16.5,submissionDate:Date("2020-12-02")},
                {title:"Statistics",teacher:"Dr. Mojtabavi", score:17.5,submissionDate:Date("2020-12-05")},
                {title:"Electrical Circuits I",teacher:"Dr. Hassani", score:18.5,submissionDate:Date("2021-14-02")},
                {title:"Electrical Circuits II",teacher:"Dr. Samani", score:14.5,submissionDate:Date("2020-03-22")},
                
            ]
        }
    ],
    findTeacherProfile(id){
        this.teachers.find(t=> t.id === id)
    },
    teachers: [
        {id:1,name:"Dr. Javadi"},
        {id:2,name:"Dr. Mahmoudi"},
        {id:3,name:"Dr. Mojtabavi"},
        {id:4,name:"Dr. Hassani"},
        {id:5,name:"Dr. Samani"}
    ]
}]

// schools[0].students[0].courses[0].score
JSON.stringify(schools)