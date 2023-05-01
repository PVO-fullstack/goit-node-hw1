const contacts = require("./contacts");
const { program } = require("commander");

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-ph, --phone, <type>");

program.parse();

const options = program.opts();

invokeAction(options);

// contacts.listContacts();

// contacts.getContactById("C9sjBfCo4UJCWjzBnOtxl");

// contacts.removeContact("rsKkOQUi80UsgVPCcLZZW");

// contacts.addContact(
//   "Alec Howard",
//   "Donec.elementum@scelerisquescelerisquedui.net",
//   "(748) 206-2688"
// );
