To set up your Angular project as per your instructions, follow these steps:

1. Install Angular CLI globally if you haven't already:
```bash
npm install -g @angular/cli
```

2. Create a new Angular project:
```bash
ng new my-angular-app
```

3. Navigate into your project directory:
```bash
cd my-angular-app
```

4. Remove all the content in `app.component.html` and replace it with the content you provided.
```bash
<!-- register.component.html -->

<h1>{{title}}</h1>

<input type="text" #name placeholder="Enter Your Name >> " name="name"><br>

<input type="text" #address placeholder="Enter Your Address >> " name="address"><br>

<input type="text" #mobile placeholder="Enter Your Mobile No. >> " name="mobile"><br>

<input type="email" #email placeholder="Enter Your E-Mail >> " name="email"><br>

<input type="password" #password placeholder="Enter Your Password >> " name="password"><br>

<button (click)="getValue(name.value, address.value, mobile.value, email.value)">Register</button>

<h1>Your Registered Data</h1>

<h2>Your Name : {{displayName}}</h2><br>
<h2>Your Address : {{displayAddress}}</h2><br>
<h2>Your Mobile No : {{displayMobile}}</h2><br>
<h2>Your E-Mail : {{displayEmail}}</h2><br>
```

5. Modify `app.component.ts` and add the content to the `AppComponent` class as instructed.
```bash
title = 'Registration Form';
  displayName = '';
  displayAddress = '';
  displayMobile = '';
  displayEmail = '';

  getValue(name: string, address: string, mobile: string, email: string): void {
    this.displayName = name;
    this.displayAddress = address;
    this.displayMobile = mobile;
    this.displayEmail = email;
  }
```

6. Save your changes.

7. Open a terminal in your project directory and start the Angular development server:
```bash
ng serve
```

Now, your Angular application should be running on `http://localhost:4200/`.