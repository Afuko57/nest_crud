import { Controller } from '@nestjs/common';
import { RequestInvoiceitemService } from './request_invoiceitem.service';

@Controller('request-invoiceitem')
export class RequestInvoiceitemController {
  constructor(private readonly requestInvoiceitemService: RequestInvoiceitemService) {}
}
