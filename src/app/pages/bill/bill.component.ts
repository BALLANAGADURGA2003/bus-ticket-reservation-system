import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from '../../models/passenger.model';
import { PassengerService } from '../../services/passenger.service';
import { BusDataService } from '../../shared/bus-data.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  busId: string = '';
  passengerDetails: Passenger[] = [];
  busName: string | undefined;
  busPrice: number | undefined;
  fromStation: string | undefined;
  toStation : string | undefined;

  constructor(
    private route: ActivatedRoute,
    private passengerService: PassengerService,
    private busDataService: BusDataService
  ) {}

  ngOnInit(): void {
    // Get the busId from the route query parameters
    this.route.queryParams.subscribe(params => {
      this.busId = params['busId'];
      if (this.busId) {
        // Fetch passenger details by busId from the backend
        this.passengerService.getPassengersByBusId(this.busId).subscribe(
          (passengers: Passenger[]) => {
            this.passengerDetails = passengers;
            console.log('Passenger Details:', this.passengerDetails);

            // Fetch bus details using the busId directly
            this.getBusDetails(this.busId);
          },
          (error: any) => {
            console.error('Error fetching passenger details:', error);
          }
        );
      }
    });
  }

  private getBusDetails(busId: string): void {
    // Fetch bus details from the BusDataService using the busId
    const selectedBus = this.busDataService.getBusById(busId);
    if (selectedBus) {
      this.busName = selectedBus.name;
      this.busPrice = selectedBus.price;
      this.fromStation = selectedBus.fromStation;
      console.log('Bus Details:', this.busName, this.busPrice);
    } else {
      console.error('Bus not found with ID:', busId);
    }
  }
}
