const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};

const module = {
    id:1, name: "NodeJS Homework",
    description: "Create a NodeJS server with ExpressJS",
    course: "CS 5610 Web Development",
};

export default function WorkingWithObjects(app) {

    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });    

    app.get('/lab5/assignment/score/:newScore', (req, res) => {
        const { newScore } = req.params;
        if (newScore !== undefined) assignment.score = newScore;
        res.json(assignment);
    });

    app.get('/lab5/assignment/completed/:newCompleted', (req, res) => {
        const { newCompleted } = req.params;
        if (newCompleted !== undefined) assignment.completed = newCompleted;
        res.json(assignment);
    });

    app.get("/lab5/module",  (req, res) => {
        res.json(module);
    });

    app.get("/lab5/module/name",  (req, res) => {
        res.json(module.name);
    });

    app.get('/lab5/module/name/:name', (req, res) => {
        const { name } = req.params;
        if (name !== undefined) module.name = name;
        res.json(module.name);
    });

    //app.listen(3000, () => console.log('Server running on port 3000'));
};