package googledrive.domain;

import googledrive.domain.*;
import googledrive.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class FileReceived extends AbstractEvent {

    private String filename;
    private String path;
    private String receivedBy;

    public FileReceived(File aggregate) {
        super(aggregate);
    }

    public FileReceived() {
        super();
    }
}
//>>> DDD / Domain Event
