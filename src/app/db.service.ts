import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  getData() {
    return [
        {id: 1, name: 'Asaad Saad', stuID: '12345', email: 'asaad@mum.edu'},
        {id: 2, name: 'Mafi Aboye', stuID: '67891', email: 'mafi@mum.edu'}
      ]
  }

}
