// // 1 Class - User

class User {
  private Id: number;
  private name: string;
  private email: string;
  private Password: string;
  protected Phone: string;
  private age: number;
  private notebooks: NoteBook[] = [];
  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  constructor(
    Id: number,
    name: string,
    email: string,
    Password: string,
    Phone: string,
    age: number,
  ) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }

    this.Id = Id;
    this.name = name;
    this.email = email;
    this.Password = Password;
    this.Phone = Phone;
    this.age = age;
  }

  public displayInfo(): void {
    console.log(`ID: ${this.Id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.Phone}`);
    console.log(`Age: ${this.age}`);
  }
}

// // 2 Inheritance

class Admin extends User {
  public manageNotes(): void {
    console.log("Admin is managing notes");
  }
}

// // 3 Class - Note

class Note {
  private Id: number;
  private title: string;
  private content: string;
  private userId: User;

  constructor(Id: number, title: string, content: string, userId: User) {
    this.Id = Id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  public preview(): string {
    return this.content.substring(0, 50) + "...";
  }

  public getId(): number {
    return this.Id;
  }
}

// // 4 Composition

class NoteBook {
  private notes: Note[] = [];

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public removeNote(noteId: number): void {
    this.notes = this.notes.filter((note) => note.getId() !== noteId);
  }
}

// // 7

class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(item: T): void {
    this.items = this.items.filter((currentItem) => currentItem !== item);
  }

  public getAllItems(): T[] {
    return this.items;
  }
}

export {};
