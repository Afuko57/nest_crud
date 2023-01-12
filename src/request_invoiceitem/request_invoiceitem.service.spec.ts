import { Test, TestingModule } from '@nestjs/testing';
import { RequestInvoiceitemService } from './request_invoiceitem.service';

describe('RequestInvoiceitemService', () => {
  let service: RequestInvoiceitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestInvoiceitemService],
    }).compile();

    service = module.get<RequestInvoiceitemService>(RequestInvoiceitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
