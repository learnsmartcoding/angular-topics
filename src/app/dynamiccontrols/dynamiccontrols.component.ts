import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { APIData } from '../constants/api-data';

@Component({
  selector: 'app-dynamiccontrols',
  templateUrl: './dynamiccontrols.component.html',
  styleUrls: ['./dynamiccontrols.component.css'],
})
export class DynamicControlsComponent implements OnInit {
  categories: Category[] = []; //collects data from API to pre-load and show data on screen
  categoryForm!: FormGroup;

  category!: Category;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //we can call API to fetch the categories data or for now we can pretend we have the data
    this.categories = APIData.categories;

    //initialize form
    this.categoryForm = this.formBuilder.group({
      items: this.formBuilder.array([]), //this is holding arrary of items. Also, this itself a formGroup of many controls.
      //description:new FormControl('')//this is regular control in the form group. Like this you can add more
    });

    this.populateExistingData();
  }

  populateExistingData() {
    this.categories.forEach((item) => {
      this.items.push(this.createExistingItem(item));
    });
  }

  //this method should return formGroup with controls
  createExistingItem(category: Category): AbstractControl {
    return new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name, Validators.required),
      isActive: new FormControl(category.isActive ? 1 : 2, Validators.required),
    });
  }

  //proerty to get form array instance from our form
  get items(): FormArray {
    return <FormArray>this.categoryForm?.get('items');
  }

  createItem(): FormGroup {
    return new FormGroup({
      id: new FormControl(0), //default value of id is zero as it is new item to be added to server
      name: new FormControl('', Validators.required),
      isActive: new FormControl(-1, Validators.required), // this will be select drop down
    });
  }

  isformValid(): boolean {
    return this.categoryForm.valid && this.categoryForm.dirty;
  }

  validateField(item: any): boolean {
    return !item.valid && (item.dirty || item.touched);
  }

  addItem(){
    this.items.push(this.createItem());
    this.categoryForm.markAsDirty();
    this.items.markAsDirty();
  }

  getFormData(){
    const finalData=<Category[]>(this.categoryForm.value.items);
    return finalData;
  }

  removeItem(index:number): void{
    this.items.removeAt(index);
    this.categoryForm.markAsDirty();
    this.items.markAsDirty();
  }

  getCategoryName(itemIndex:number): String {
    return this.items.getRawValue()[itemIndex].name;//index it and find the name of the category/read form control value using index
  }

  onSubmit() {
    alert(JSON.stringify(this.getFormData()));
  }
  
}
