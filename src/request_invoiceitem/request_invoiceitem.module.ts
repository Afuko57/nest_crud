import { Module } from '@nestjs/common';
import { RequestInvoiceitemService } from './request_invoiceitem.service';
import { RequestInvoiceitemController } from './request_invoiceitem.controller';

@Module({
  controllers: [RequestInvoiceitemController],
  providers: [RequestInvoiceitemService]
})
export class RequestInvoiceitemModule {}
