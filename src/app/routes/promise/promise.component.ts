import { Component } from '@angular/core';
import { HeaderBackComponent } from "../../components/header-back/header-back.component";
import { HeaderBackBurgerComponent } from "../../components/header-back-burger/header-back-burger.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { MenuService } from '../../services/menu.service';
import { PromiseService } from '../../services/promise.service';
import { Promise } from '../../services/promise.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OrganisationService } from '../../services/organisation.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
    selector: 'app-promise',
    standalone: true,
    templateUrl: './promise.component.html',
    styleUrl: './promise.component.scss',
    imports: [HeaderBackComponent, HeaderBackBurgerComponent, MenuComponent, CommonModule]
})
export class PromiseComponent {
    showMenu: boolean = true;
    promise!: Promise;
    promiseId!: number;
    isComplete!: boolean;
    private subscription!: Subscription;

    organisationName!: string;
    transactionId!: number;

    constructor(private menuService: MenuService, private promiseService: PromiseService, 
        private route: ActivatedRoute, private organisationService: OrganisationService,
        private  transactionService: TransactionService) {}

    ngOnInit(): void {
        this.menuService.showMenu$.subscribe(value => {
            this.showMenu = value;
        })
        this.menuService.updateMenu(false);

        this.subscription = this.route.params.subscribe(params => {
            this.promiseId = params['id'];
            this.getPromise();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getPromise(): void {
        this.promiseService.getPromise(this.promiseId)
          .subscribe(data => {
            this.promise = data;
            console.log('Promise:', this.promise);
          }, error => {
            console.error('Error fetching promise:', error);
          });

          // Organisation name
          this.organisationService.getOrganisation(this.promise.organisation_id)
          .subscribe(data => {
            this.organisationName = data.name;
          }, error => {
            console.error('Error fetching promise:', error);
          });

          // Transaction ID
          this.transactionService.getTransaction(this.promise.promise_id)
          .subscribe((data: { transaction_id: number; }) => {
            this.transactionId = data.transaction_id;
          }, (error: any) => {
            console.error('Error fetching promise:', error);
          });
    }

    

}