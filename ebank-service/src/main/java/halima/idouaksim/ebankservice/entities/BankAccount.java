package halima.idouaksim.ebankservice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Entity
@Setter @Getter @AllArgsConstructor @NoArgsConstructor @Builder
public class BankAccount {
    @Id @GeneratedValue
    private String id;
    private Date createdAt;
    private double balance;
    private String type;
    private Long customerId;
}
