
class ContactItem {

    id: string;
    name: string;
    phone: string;

    constructor(name: string , phone: string) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.phone = phone;
    }

    static fromJSON (json: { name: string; phone: string; id: string }) {
        let contactItem = new ContactItem(json.name, json.phone);
        contactItem.id = json.id;
        return contactItem;
    }
}

export default ContactItem;