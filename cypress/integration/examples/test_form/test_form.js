describe("Pizza Form", () => {

    beforeEach(() => {
      cy.visit("http://localhost:3002/pizza");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const pep = () => cy.get('input[name="pepperoni"]');
    const sausage = () => cy.get('input[name="sausage"]');
    const pepper = () => cy.get('input[name="pepper"]');
    const bacon = () => cy.get('input[name="bacon"]');
    const sizeSelect = () => cy.get('select[name="size"]');
    const submit = () => cy.get('button');

    it("can input a name", () => {
        nameInput().type("karla").should("have.value", "karla");
    });
    it("can select mutiple toppings", () => {
        pep().check();
        pepper().check();
    });
    it("can submit form", () => {
        nameInput().type("karla");
        sizeSelect().select("medium");
        pep().check();
        pepper().check();
        submit().click();
    })
})