/*******************************************************************************
 * Copyright (c) 2012-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 *******************************************************************************/
package org.eclipse.che.api.workspace.shared.dto.stack;

import org.eclipse.che.api.workspace.shared.stack.StackSource;
import org.eclipse.che.dto.shared.DTO;

/**
 * @author Alexander Andrienko
 */
@DTO
public interface StackSourceDto extends StackSource {
    void setType(String type);

    StackSourceDto withType(String type);

    void setOrigin(String origin);

    StackSourceDto withOrigin(String origin);
}
