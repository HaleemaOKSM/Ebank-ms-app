package halima.idouaksim.ebankservice.services;

import halima.idouaksim.ebankservice.entities.BankAccount;
import halima.idouaksim.ebankservice.repository.BankAccountRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class EbankService {
    private BankAccountRepository bankAccountRepository;

    public EbankService(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    public List<BankAccount> getAllBankAccounts() {
        return bankAccountRepository.findAll();
    }
    public BankAccount getBankAccountById( String id) {
        return bankAccountRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Bank account not found"));
    }

    public BankAccount save(BankAccount bankAccount) {
        bankAccount.setId(UUID.randomUUID().toString());
        bankAccount.setCreatedAt(new Date());
        return bankAccountRepository.save(bankAccount);
    }
}
