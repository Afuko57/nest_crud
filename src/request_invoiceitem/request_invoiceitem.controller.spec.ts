import { Test, TestingModule } from '@nestjs/testing';
import { RequestInvoiceitemController } from './request_invoiceitem.controller';
import { RequestInvoiceitemService } from './request_invoiceitem.service';

describe('RequestInvoiceitemController', () => {
  let controller: RequestInvoiceitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestInvoiceitemController],
      providers: [RequestInvoiceitemService],
    }).compile();

    controller = module.get<RequestInvoiceitemController>(RequestInvoiceitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
