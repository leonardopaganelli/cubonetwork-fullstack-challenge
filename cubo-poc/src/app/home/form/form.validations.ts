import { Validators } from '@angular/forms';

export const customValidators = {
    firstName: {
        validators: [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(1)
        ],
        updateOn: 'blur'
    },
    lastName: {
        validators: [
            Validators.required,
            Validators.maxLength(80),
            Validators.min(1)
        ],
        updateOn: 'blur'
    },
    participation: {
        validators: [
            Validators.required,
            Validators.max(100),
            Validators.min(1)
        ],
    }
};
