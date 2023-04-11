import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private toastr: ToastrService) { }

    show(message: string, type: string, options?: any) {
        debugger;
        if (!options) {
            options = {
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
                tapToDismiss: true
            };
        }

        switch (type) {
            case 'success':
                this.toastr.success(message, 'Success', options);
                break;
            case 'warning':
                this.toastr.warning(message, 'Warning', options);
                break;
            case 'error':
                this.toastr.error(message, 'Error', options);
                break;
            default:
                this.toastr.info(message, 'Info', options);
        }
    }



}