import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {



  imageUrl: string | ArrayBuffer | null = null;
  validations = {
    firstName: true,
    lastName: true,
    role: true,
  };
  showExamineeMessage: boolean = false;
  isClearEnabled: boolean = false;
  router: any;

  constructor() {
    console.log('CreateUserComponent initialized');
  }

  validateField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.id === 'first-name') {
      this.validations.firstName = !!input.value;
    } else if (input.id === 'last-name') {
      this.validations.lastName = !!input.value;
    }
  }

  previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target!.result as string | ArrayBuffer;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveUser() {
    console.log('User saved');
    // Implement the save logic here
  }

  cancel() {
    this.router.navigate(['/users']); // Navigate back to the user header view
  }

  handleRoleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const checkboxes = document.querySelectorAll('input[name="role"]');

    if (input.value === 'examinee' && input.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox !== input) {
          (checkbox as HTMLInputElement).checked = false;
          (checkbox as HTMLInputElement).disabled = true;
          checkbox.parentElement!.classList.add('disabled');
        }
      });
      this.showExamineeMessage = true;
    } else if (input.value === 'examinee' && !input.checked) {
      checkboxes.forEach((checkbox) => {
        (checkbox as HTMLInputElement).disabled = false;
        checkbox.parentElement!.classList.remove('disabled');
      });
      this.showExamineeMessage = false;
    }

    this.validations.role = Array.from(checkboxes).some((checkbox) => (checkbox as HTMLInputElement).checked);
  }

  togglePasswordFields(event: Event) {
    const autoGenerate = (event.target as HTMLInputElement).checked;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

    passwordInput.disabled = autoGenerate;
    confirmPasswordInput.disabled = autoGenerate;

    if (autoGenerate) {
      passwordInput.value = '';
      confirmPasswordInput.value = '';
      this.isClearEnabled = false;
    }
  }

  togglePasswordVisibility(id: string) {
    const input = document.getElementById(id) as HTMLInputElement;
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
  }

  toggleClearButton() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

    this.isClearEnabled = !!passwordInput.value || !!confirmPasswordInput.value;
  }

  clearPasswordFields() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

    passwordInput.value = '';
    confirmPasswordInput.value = '';
    this.isClearEnabled = false;
  }

  generatePassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    const generatedPassword = Math.random().toString(36).slice(-8);

    passwordInput.value = generatedPassword;
    confirmPasswordInput.value = generatedPassword;
    this.isClearEnabled = true;
  }
}
