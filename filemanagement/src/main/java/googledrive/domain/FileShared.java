package googledrive.domain;

import googledrive.domain.*;
import googledrive.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class FileShared extends AbstractEvent {

    private String filename;
    private String path;
    private String sharedWith;

    public FileShared(File aggregate) {
        super(aggregate);
    }

    public FileShared() {
        super();
    }
}
//>>> DDD / Domain Event
