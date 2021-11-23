let project = [{
    id: 1,
    topText: "This is a project",
    bottomText: "Javascript at home: Node.js, and project at work!"
  }];
  
  let AUTO_INCREMENT = 1;
  
  app.post("/create/project", (req, res) => {
    const projectToCreate = req.body;
    projectToCreate.id = ++AUTO_INCREMENT;
    projectToCreate.push(projectToCreate);
      res.send(req.body);
  });
  
  app.patch("/update/projects/:id", (req, res) => {
    let projectToUpdate;
    projectToUpdate = projectToUpdate.map(projectToUpdate => {
        if (projectToUpdate.id === Number(req.params.id)) {
          projectToUpdate = { ...project, ...req.body, id: project.id };
            return projectToUpdate;
        }
        return project;
    });
    projectToUpdate ? res.send(projectToUpdate): res.sendStatus(404);
  });
  
  app.delete("/delete/project/:id", (req, res) => {
    let foundProjectToDelete = false;
    project = project.filter(project => {
        const notToDelete = project.id !== Number(req.params.id);
        if (!notToDelete) foundProjectToDelete = true;
        return notToDelete;
    });
    foundProjectToDelete ? res.sendStatus(200) : res.sendStatus(404);
  });